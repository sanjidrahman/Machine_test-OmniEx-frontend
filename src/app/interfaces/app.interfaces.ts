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
    previousGroupData: IAvgRateReportData
    totalDueAmount: number
    supplierData: IEntityModel
    buyerData: IEntityModel
}

export interface IAvgRateReportData {
    avgRate: number
}

