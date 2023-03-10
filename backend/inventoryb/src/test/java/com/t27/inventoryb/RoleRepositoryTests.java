package com.t27.inventoryb;

import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;


@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class RoleRepositoryTests {
    
}
