package models

import (
	"fmt"

	"github.com/jinzhu/gorm"
	"gradious.com/exercises/hotels/config"
)

var db *gorm.DB

type Student struct {
	ID      int    `gorm:"primaryKey"`
	Name    string `gorm:"column:name" json:"name"`
	Age     int    `gorm:"column:age" json:"age"`
	College string `gorm:"column:college" json:"college"`
}

func Init() {
	config.Connect()
	db = config.GetDB()
	fmt.Println(db)
	db.AutoMigrate(&Student{})
}
func (Student) TableName() string {
	return "Student"
}

func (b *Student) CreateStudent() *Student {
	db.NewRecord(b)
	db.Create(&b)
	return b
}

func GetAllStudents() []Student {
	var Students []Student
	db.Find(&Students)
	fmt.Println(Students)
	return Students
}

func EditStudent(id int, newStudent Student) error {
	var oldStudent Student
	err := db.First(&oldStudent, id).Error
	if err != nil {
		return err
	}
	if len(newStudent.Name) != 0 {
		oldStudent.Name = newStudent.Name
	}
	if newStudent.Age != 0 {
		oldStudent.Age = newStudent.Age

	}
	if len(newStudent.College) != 0 {
		oldStudent.College = newStudent.College
	}
	if err := db.Save(&oldStudent).Error; err != nil {
		return err
	}
	return nil

}
func GetStudentByName(name string) *Student {
	var getStudent Student
	db.Where("name=?", name).Find(&getStudent)
	return &getStudent
}

func DeleteStudent(ID int) Student {
	var student Student
	db.Where("ID=?", ID).Delete(student)
	return student
}
