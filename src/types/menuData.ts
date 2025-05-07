export interface MenuItem {
    menuId: string;
    pMenuId: string | 'NONE';
    menuNm: string;
    trnslNm: string;
    menuDp: number;
    menuUrl: string;
    menuTypeCd: string;
    sortOrd: number;
    menuIcon: string | null;
    dsplyYn: string;
    useYn: string;
    rmk?: string | null;
    blankYn?: string;
    regDtm?: string;
    regId?: string;
    updtDtm?: string | null;
    updtId?: string | null;
    wordTrnslPostDtos?: [];
    children?: MenuItem[];
    isOpen?: boolean;
}



