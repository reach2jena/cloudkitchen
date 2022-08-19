export class SignupResponseVO {
    customerID!: number;
    custFirstName!: string;
    custLastName!: string;
    custPhone!: number;
    deliveryAddress!: string;
    billingAddress!: string;
    custZipCode!: number;
    createdOn!: string;
    createdBy?: any;
    modifiedOn!: string;
    modifedBy?: any;
    username!: string;    
    orders?: any;
}