package handlers

import (
	"porpop-backend/models"

	"github.com/gin-gonic/gin"
)

func CreateOrder(c *gin.Context) {
	var order models.Order
	if err := c.ShouldBindJSON(&order); err != nil {
		c.JSON(400, gin.H{"error": "Invalid input"})
		return
	}

	// Get buyer ID from JWT claims
	buyerID, _ := c.Get("userID")
	order.BuyerID = buyerID.(uint)
	order.Status = "pending" // Default status

	if err := models.DB.Create(&order).Error; err != nil {
		c.JSON(500, gin.H{"error": "Failed to create order"})
		return
	}

	c.JSON(200, order)
}
