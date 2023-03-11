
## **Pincode API**

This API provides information about Indian pincodes. The data is retrieved from a MongoDB database and can be queried based on different parameters.

### **Base URL**

```

https://{baseUrl}/api/

```

### **Endpoints**

### Get pincode details by pincode

Returns the details of a specific pincode.

- URL: **`/pincode/:pincodeId`**
- Method: **`GET`**
- Parameters:
    - **`pincodeId`** (required): The 6-digit pincode.
- Response:
    - Status code: **`200`**
    - Body:
        
        ```json
        
        {
          "officename": "Bethapudi B.O",
          "pincode": "522502",
          "officeType": "B.O",
          "Deliverystatus": "Delivery",
          "divisionname": "Guntur",
          "regionname": "Vijayawada",
          "circlename": "Andhra Pradesh",
          "Taluk": "Mangalagiri Ho",
          "Districtname": "Guntur",
          "statename": "ANDHRA PRADESH"
        }
        
        ```
        

### Get pincode details by area

Returns the details of pincodes within a specific area.

- URL: **`/pincode/area/:search`**
- Method: **`GET`**
- Parameters:
    - **`search`** (required): The name of the area to search for.
- Response:
    - Status code: **`200`**
    - Body:
        
        ```json
        
        [  {   "officename": "Bethapudi B.O",  
        "pincode": "522502",    
        "officeType": "B.O",   
        "Deliverystatus": "Delivery",   
        "divisionname": "Guntur",   
        "regionname": "Vijayawada",    
        "circlename": "Andhra Pradesh",   
        "Taluk": "Mangalagiri Ho",    
        "Districtname": "Guntur",    
        "statename": "ANDHRA PRADESH"  }, 
        
        {"officename": "Cherukupalle B.O",  
        "pincode": "522414",    
        "officeType": "B.O",   
        "Deliverystatus": "Delivery",    
        "divisionname": "Guntur",   
        "regionname": "Vijayawada",    
        "circlename": "Andhra Pradesh",   
        "Taluk": "Mangalagiri Ho",    
        "Districtname": "Guntur",    
        "statename": "ANDHRA PRADESH"  }
        ]
        
        ```
        

### Get pincode details by district

Returns the details of pincodes within a specific district.

- URL: **`/pincode/district/:search`**
- Method: **`GET`**
- Parameters:
    - **`search`** (required): The name of the district to search for.
- Response:
    - Status code: **`200`**
    - Body:
        
        ```json
        
        [
          {
            "officename": "Bethapudi B.O",
            "pincode": "522502",
            "officeType": "B.O",
            "Deliverystatus": "Delivery",
            "divisionname": "Guntur",
            "regionname": "Vijayawada",
            "circlename": "Andhra Pradesh",
            "Taluk": "Mangalagiri Ho",
            "Districtname": "Guntur",
            "statename": "ANDHRA PRADESH"
          }
        ]
        
        ```
