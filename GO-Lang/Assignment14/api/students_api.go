package api

import (
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
	"gradious.com/exercises/hotels/models"
	"gradious.com/exercises/hotels/utils"
)

func GetStudents() echo.HandlerFunc {
	return func(c echo.Context) (err error) {
		//db := db.DbManager()
		Students := models.GetAllStudents()
		return c.JSON(http.StatusOK, Students)
	}
}

func GetStudent() echo.HandlerFunc {
	return func(c echo.Context) (err error) {
		//db := db.DbManager()
		name := c.Param("name")
		Students := models.GetStudentByName(name)
		return c.JSON(http.StatusOK, Students)
	}
}

func CreateStudent() echo.HandlerFunc {
	return func(c echo.Context) (err error) {
		Student := models.Student{}
		utils.ParseBody(c.Request(), &Student)
		h := Student.CreateStudent()
		return c.JSON(http.StatusOK, h)
	}
}
func EditStudent() echo.HandlerFunc {
	return func(c echo.Context) (err error) {
		Student := models.Student{}
		param := c.Param("id")
		id, _ := strconv.Atoi(param)
		Student.ID = id
		utils.ParseBody(c.Request(), &Student)
		err = models.EditStudent(id, Student)
		if err != nil {
			return c.JSON(http.StatusBadRequest, err)
		}
		return c.JSON(http.StatusOK, map[string]string{"response": "Student updated successfully"})
	}
}

func DeleteStudent() echo.HandlerFunc {
	return func(c echo.Context) (err error) {
		idString := c.Param("id")
		status := make(map[string]string)
		id, err := strconv.Atoi(idString)
		if err != nil {
			status["deleted"] = "false"
			status["reason"] = "Unknown Student ID"
			return c.JSON(http.StatusNotFound, status)
		}
		models.DeleteStudent(id)
		status["deleted"] = "true"
		return c.JSON(http.StatusOK, status)
	}
}
