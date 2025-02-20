package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// RoleAuth middleware checks if user has required role
func RoleAuth(requiredRole string) gin.HandlerFunc {
	return func(c *gin.Context) {
		userRole, exists := c.Get("role")
		if !exists {
			c.AbortWithStatusJSON(http.StatusForbidden, gin.H{"error": "Role not found in token"})
			return
		}

		if userRole != requiredRole {
			c.AbortWithStatusJSON(http.StatusForbidden,
				gin.H{"error": "Insufficient permissions"})
			return
		}

		c.Next()
	}
}
