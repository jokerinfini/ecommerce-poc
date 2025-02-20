package handlers

import (
	"fmt"
	"net/http"
	"porpop-backend/models"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateProduct(c *gin.Context) {
	var product models.Product
	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(400, gin.H{"error": "Invalid input"})
		return
	}

	vendorID, ok := c.Get("userID")
	if !ok {
		c.JSON(401, gin.H{"error": "Unauthorized"})
		return
	}

	vendorIDStr := fmt.Sprintf("%v", vendorID)
	vendorIDUint, err := strconv.ParseUint(vendorIDStr, 10, 64)
	if err != nil {
		c.JSON(500, gin.H{"error": "Internal server error", "details": "Failed to convert vendorID to uint"})
		return
	}

	product.VendorID = uint(vendorIDUint)

	if err := models.DB.Create(&product).Error; err != nil {
		c.JSON(500, gin.H{"error": "Failed to create product"})
		return
	}

	c.JSON(200, product)
}
func GetProducts(c *gin.Context) {
	var products []models.Product

	// Fetch all products
	if err := models.DB.Find(&products).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":   "Failed to fetch products",
			"details": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, products)
}
