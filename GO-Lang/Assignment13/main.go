package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"sort"
	"strconv"
)

type CustomersDataBase map[string][]Customer
type Customer struct {
	CustomerId   int    `json:"customerId"`
	CustomerName string `json:"customerName"`
	PhoneNumber  string `json:"phoneNumber"`
	Email        string `json:"email"`
}

func (db CustomersDataBase) list(w http.ResponseWriter, r *http.Request) {
	data, err := json.MarshalIndent(db["customers"], "", "\t")
	if err != nil {
		panic(err)
	}
	fmt.Fprint(w, string(data))
}
func (db CustomersDataBase) findTheCustomer(w http.ResponseWriter, r *http.Request) {
	if r.URL.Query().Has("id") {
		queryKey := r.URL.Query().Get("id")
		customers := db["customers"]
		key, _ := strconv.Atoi(queryKey)
		for _, customer := range customers {
			if (customer.CustomerId) == key {
				data, err := json.MarshalIndent(customer, "", "\t")
				if err != nil {
					panic(err)
				}
				fmt.Fprint(w, string(data))
				return
			}
		}
	}
	fmt.Fprint(w, "Customer id not found")
}
func (db CustomersDataBase) sortCustomers(w http.ResponseWriter, r *http.Request) {
	queryKey := r.URL.Query().Get("key")
	customers := db["customers"]
	switch queryKey {
	case "name":
		sort.Slice(customers, func(i, j int) bool {
			return customers[i].CustomerName < customers[j].CustomerName
		})
	case "email":
		sort.Slice(customers, func(i, j int) bool {
			return customers[i].Email < customers[j].Email
		})
	case "phoneNum":
		sort.Slice(customers, func(i, j int) bool {
			return customers[i].PhoneNumber < customers[j].PhoneNumber
		})
	default:
		sort.Slice(customers, func(i, j int) bool {
			return customers[i].CustomerId < customers[j].CustomerId
		})
	}
	data, err := json.MarshalIndent(customers, "", "\t")
	if err != nil {
		panic(err)
	}
	fmt.Fprint(w, string(data))
}
func main() {
	fmt.Println("Assignment 13")
	customers := []Customer{
		{1, "manikanta", "6304867744", "manikantaknr@gmail.com"},
		{4, "siddiq", "7702999912", "siddiq@gmail.com"},
		{5, "balu", "6281455211", "balubalaji@gmail.com"},
		{6, "shanmukh", "8008459377", "shanmukhsr@gmail.com"},
		{2, "bharath", "1234567890", "bharath@gmail.com"},
		{3, "krishna", "0123456789", "krishna@gmail.com"}}
	customerDb := make(CustomersDataBase)
	customerDb["customers"] = customers
	http.HandleFunc("/customers/list/", customerDb.list)
	http.HandleFunc("/customers/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Welcome to customers Page.You can Access the following endpoints.\n\tcustomers/list\n\tcustomers/find?id=_\n\tcustomers/sort?key=_")
	})
	http.HandleFunc("/customers/find/", customerDb.findTheCustomer)
	http.HandleFunc("/customers/sort/", customerDb.sortCustomers)
	log.Fatal(http.ListenAndServe(":3000", nil))
}
