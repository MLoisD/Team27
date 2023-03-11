package com.t27.inventoryapp.payload.response;

public class MessageRespone {

    private String message;

    public MessageRespone(String message){
        this.message = message;
    }

    /**
     * @return String return the message
     */
    public String getMessage() {
        return message;
    }

    /**
     * @param message the message to set
     */
    public void setMessage(String message) {
        this.message = message;
    }

}
