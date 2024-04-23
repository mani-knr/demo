package main

import "fmt"

func modifyArray(arr [4]string) {
	arr[0] = "anaconda"
	arr[1] = "bold"
	arr[2] = "cute"
	arr[3] = "dirty"
}
func modifySlice(slice []string) {
	slice[0] = "eraser"
	slice[1] = "fork"
	slice[2] = "good"
	slice[3] = "hungry"
	// slice[15] = "dkmfnsd"
}

func main() {
	myArr := [4]string{"apple", "ball", "cat", "Dog"}
	fmt.Println("Array before Modification : ", myArr)
	modifyArray(myArr)
	fmt.Println("Array After Modification : ", myArr)
	// mySlice := []string{"eagle", "fish", "goat", "horse"}
	mySlice := make([]string, 0, 20)
	mySlice = append(mySlice, "eagle", "fish", "goat", "horse")
	fmt.Println("Slice before Modification : ", mySlice)
	modifySlice(mySlice)
	fmt.Println("Slice After Modification : ", mySlice)
}
