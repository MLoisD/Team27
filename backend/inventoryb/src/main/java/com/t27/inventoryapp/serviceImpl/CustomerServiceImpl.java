package com.t27.inventoryapp.serviceImpl;

import com.t27.inventoryapp.model.User;
import com.t27.inventoryapp.repository.UserRepository;
import com.t27.inventoryapp.security.services.CustomerService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private UserRepository customerRepository;

    @Override
    public User save(User customer) {
        return customerRepository.save(customer);
    }

    public User saveCustomer(User customer){
        return customerRepository.save(customer);
    }

    public Integer isCustomerPresent(User customer){
        User customer1 = customerRepository.getCustomerByEmailAndUsername(customer.getUseremail(),customer.getUsername());
        return customer1!=null ? customer1.getId().intValue(): null ;
    }

    public void CustomerService(UserRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public List<User> getUsers() {
        return customerRepository.findAll();
    }

    @Override
    public User saveUser(User customer) {
        return customerRepository.save(customer);
    }



    
}
