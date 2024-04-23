package routes

import (
	"gradious.com/exercises/hotels/api"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func Init() *echo.Echo {
	e := echo.New()

	e.Use(middleware.RemoveTrailingSlash())

	e.GET("/students", api.GetStudents())
	e.GET("/students/:name", api.GetStudent())
	e.POST("/student", api.CreateStudent())
	e.DELETE("/student/:id", api.DeleteStudent())
	e.PUT("/student/:id", api.EditStudent())
	return e
}
