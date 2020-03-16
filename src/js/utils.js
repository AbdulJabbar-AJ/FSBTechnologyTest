export function findCategoryIndex(id) {
    return parseInt(id.toString()[0]) -1
}

export function findId(type, id) {
    switch (type) {
        case 'subcat':
            return id.toString().slice(0, 2)
        case 'event':
            return id.toString().slice(0, 3)
        case 'selection':
            return id.toString().slice(0, 4)
        default:
            break
    }
}

export function findEntityIndex(type, entityGroup, id) {
    const entityId = findId(type, id)
    return entityGroup.findIndex(entity => entity.id === parseInt(entityId))
}

export function findLocation(cat, id, selection = true) {
    const arr = []

    arr.push(findCategoryIndex(id))
    arr.push(findEntityIndex('subcat', cat[arr[0]].subcat, id))
    arr.push(findEntityIndex('event', cat[arr[0]].subcat[arr[1]].event, id))
    if (selection) {
        arr.push(findEntityIndex('selection', cat[arr[0]].subcat[arr[1]].event[arr[2]].selection, id))
    }

    return arr
}


export default {
    findCategoryIndex,
    findId,
    findEntityIndex,
    findLocation
}