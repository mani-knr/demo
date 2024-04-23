package main

import "fmt"

func customAppend(slice []int, args ...int) []int {
	totalLength := len(slice) + len(args)
	sliceLength := len(slice)
	if totalLength > cap(slice) {
		newSlice := make([]int, totalLength)
		copy(newSlice, slice)
		slice = newSlice
	}
	slice = slice[:totalLength]
	copy(slice[sliceLength:], args)
	return slice
}
func main() {
	mySlice := make([]int, 0, 10)
	fmt.Printf("Initial  length : %v capacity : %v slice : %v\n", len(mySlice), cap(mySlice), mySlice)
	mySlice = customAppend(mySlice, 1, 2, 32, 3, 2)
	fmt.Printf("After Inserting length : %v capacity : %v slice : %v\n", len(mySlice), cap(mySlice), mySlice)
	mySlice = customAppend(mySlice, 44, 23)
	fmt.Printf("After Inserting length : %v capacity : %v slice : %v\n", len(mySlice), cap(mySlice), mySlice)
	mySlice = customAppend(mySlice, 83, 9, 23, 78, 21, 98, 69)
	fmt.Printf("After Inserting length : %v capacity : %v slice : %v\n", len(mySlice), cap(mySlice), mySlice)
}
