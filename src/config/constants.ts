export const supportedRoles = {
    SuperAdmin: 'SuperAdmin',
    Admin: 'Admin',
    Proveedor: 'Proveedor'
}

export enum SupportedPermissionsEnum {
    LIST_USERS = 'LIST_USERS',
    CREATE_USER = 'CREATE_USER',
    ASSIGN_ROLE = 'ASSIGN_ROLE',
    REMOVE_ROLE = 'REMOVE_ROLE',
    LOCK_USER = 'LOCK_USER',
    UNLOCK_USER = 'UNLOCK_USER',
    LIST_ROLES = 'LIST_ROLES',
    SEE_ROLE = 'SEE_ROLE',
    CREATE_ROLE = 'CREATE_ROLE',
    UPDATE_ROLE = 'UPDATE_ROLE',
    DELETE_ROLE = 'DELETE_ROLE',
    LIST_PERMISSION = 'LIST_PERMISSION',
    SEE_PERMISSION = 'SEE_PERMISSION',
    CREATE_PERMISSION = 'CREATE_PERMISSION',
    UPDATE_PERMISSION = 'UPDATE_PERMISSION',
    DELETE_PERMISSION = 'DELETE_PERMISSION',
    SEED_DATA = 'SEED_DATA',
    ASSIGN_PERMISSIONS_TO_ROLES = 'ASSIGN_PERMISSIONS_TO_ROLES',
    REMOVE_PERMISSIONS_TO_ROLES = 'REMOVE_PERMISSIONS_TO_ROLES'
}
