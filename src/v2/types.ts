

export interface PropertySearchFilter {
    OwnerEntityId?: number;
    ExcludeManagementStoppedBeforeDate?: string;
    CloseAllAccounting?: boolean;
    SuspendPayments?: boolean;
    SortColumn?: 1 | 2 | 3 | 4;
    Id?: number;
    SortDescending?: boolean;
    PageIndex?: number;
    PageSize?: number;
    SearchTerm?: string;
}


export interface PaginationResponse<T> {
    ResultCount?: number;
    ResultSet?: T[];
    Rank?: number;
    PageIndex?: number;
    PageSize?: number;
    SearchTerm?: string;
}

export interface PropertyListItem {
    PropertyId?: number;
    PropertyCode?: string;
    PropertyName?: string;
    PropertyClosed?: boolean;
    PropertySuspendPayments?: boolean;
    PropertyType?: string;
    ManagementStoppedDate?: string;
    OwnerEntityId?: number;
    OwnerEntityName?: string;
    OwnerClosed?: boolean;
}

export interface TenantSearchFilters {
    ExcludeCloseAllAccounting?: boolean;
    PropertyId?: number;
    SmartSort?: boolean;
    HasLeaseWithRecovery?: boolean;
    ExcludeLeaseIdFromLeaseCheck?: number;
    Id?: number;
    ExcludeIntSelection?: number[];
    ExcludeStringSelection?: string[];
    PageIndex?: number;
    PageSize?: number;
    SearchTerm?: string;
}

export interface TenantListItem {
    TenantId?: number;
    TenantCode?: string;
    ListOrTradingAsName?: string;
    LesseeName?: string;
    PropertyId?: number;
    PropertyCode?: string;
    PropertyName?: string;
    MainUnitNo?: string;
    SortColumnString?: string;
}
