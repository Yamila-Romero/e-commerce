export interface IOrder {
    user_id: string | undefined;
    products: IOrderProduct[];
    total_price: number;
    createdAt?: Date;
    updatedAt?: Date;
    }

export interface IOrderProduct{
    product_id: string;
    quantity: number ;
    sub_total: number;
}