package com.t27.inventoryapp.dto;


import java.time.LocalDateTime;
import java.util.Date;

public class ResponseOrderDTO {

    private float amount;
    private int invoiceNumber;
    private String ShippingVia;
    private int orderId;

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public int getInvoiceNumber() {
        return invoiceNumber;
    }

    public void setInvoiceNumber(int invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }



    public String getShippingDescription() {
        return ShippingVia;
    }

    public void setShippingDescription(String ShippingVia) {
        ShippingVia = ShippingVia;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }
}