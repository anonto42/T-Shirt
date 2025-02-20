import { model, Schema } from "mongoose";


const orderSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        product:{
            type: Object,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        productPrice: {
            type: Number,
            required: true
        },
        totalPriceWithDelivery: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Canceled'],
            default: 'Pending'
        },
        shippingAddress: {
            type: Object,
            required: true
        },
        paymentMethod: {
            type: String,
            required: true
        },
        paymentStatus: {
            type: String,
            defualt:"Pending",
            required: true
        },
        tran_id:{
            type: String,
            required: true,
            default:"cash_on_delivery"
        }
    },
    {
        timestamps: true
    }
)


export const OrderModel = model("Order", orderSchema);