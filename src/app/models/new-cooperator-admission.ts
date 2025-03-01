export interface NewCooperatorAdmission {
    name: string;
    cpf: string;
    situation: boolean;
    account: Account[];
}

export interface Account {
    accountType: AccountType;
    accountNumber: number;
}

export enum AccountType {
    APPLICATION = 'Aplicação',
    CURRENT = 'Corrent',
}

