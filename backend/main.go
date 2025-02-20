package main

import (
	"porpop-backend/handlers"
	"porpop-backend/models"
	"time"

	"porpop-backend/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
)

func main() {
	// 1. Initialize Database
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}

	// 2. Assign DB instance to models package (CRUCIAL)
	models.DB = db

	// 3. AutoMigrate tables
	db.AutoMigrate(&models.User{}, &models.Product{}, &models.Order{})

	// 4. Gin setup
	r := gin.Default()

	// 5. CORS Configuration
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// 6. Routes
	r.POST("/register", handlers.Register)
	r.POST("/login", handlers.Login)

	auth := r.Group("/")
	auth.Use(middleware.JWTAuth())
	{
		// Product Routes (Vendor only)
		auth.POST("/products", middleware.RoleAuth("vendor"), handlers.CreateProduct)
		auth.GET("/products", handlers.GetProducts)
	}

	// 7. Start server
	r.Run(":8080")
}
