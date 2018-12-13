const getActionType = (prefix) => (type) => `${prefix}.${type}`;

export {
    getActionType
}