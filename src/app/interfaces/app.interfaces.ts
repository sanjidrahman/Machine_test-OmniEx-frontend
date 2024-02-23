export interface IEntityModel {
    _id: string
    name: string
    bankDetails: IBankDetailModel[]
    type: string
    __v: number
}

export interface IBankDetailModel {
    holderName: string
    accountNumber: string
    bankName: string
    ifsc: string
    _id: string
}

export interface IEntityResModel {
    allEntities: IEntityModel[]
}

export interface ISendRecordResModel {
    sendRecords: ISendRecordModel[]
}

export interface IReceiveRecordResModel {
    receiveRecords: IReceiveRecordModel[]
}

export interface IQuoteRecordResModel {
    stockRecords: IReceiveRecordModel[]
}

export interface IReportResModel {
    report: IReportModel[]
}

export interface ISendRecordModel {
    _id: string
    buyerId: IEntityModel
    supplierId: IEntityModel
    date: string
    time: string
    amount: number
    __v: number
}

export interface IReceiveRecordModel {
    _id: string
    buyerId: IEntityModel
    supplierId: IEntityModel
    date: string
    time: string
    amount: number
    quatity: number
    rate: number
    __v: number
}

export interface IQuoteRecordModel {
    _id: string
    buyerId: IEntityModel
    supplierId: IEntityModel
    date: string
    time: string
    amount: number
    __v: number
}

export interface IReportModel {
    supplierData: SupplierData
    dueAmount: number
    buyerData: BuyerData
    avgRate: number
}

export interface SupplierData {
    name: string
}

export interface BuyerData {
    name: string
}

// export interface IReportModel {
//     _id: string
//     buyerId: string
//     supplierId: string
//     date: string
//     time: string
//     amount: number
//     quantity: number
//     rate: number
//     __v: number
//     supplierData: IEntityModel
//     sendRecordData: ISendRecordModel
//     buyerData: IEntityModel
//     dueAmount: number
// }

// export interface IReportModel {
//     _id: string
//     avg_rate: number
//     supplierData: IEntityModel
//     dueAmount: number
// }

