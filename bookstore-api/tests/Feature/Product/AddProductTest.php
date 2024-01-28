<?php
// tests/Feature/ProductTest.php

namespace Tests\Feature\Product;

use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AddProductTest extends TestCase
{
    use RefreshDatabase;

    public function testAddProduct()
    {
        // Create a sample user for authentication
        $user = User::factory()->create();

        // Authenticate the user
        $this->actingAs($user);

        // Sample product data
        $productData = [
            'title' => 'Sample Title',
            'price' => '199.99',
            'author' => 'Sample Author',
        ];

        // Send a POST request to the products endpoint to add a new product
        $response = $this->postJson('/api/products', $productData);
        dump($response->json());

        // Assert that the product was added successfully (HTTP status 201)
        $response->assertStatus(200);

        // Assert that the response structure includes the expected keys
        $response->assertJsonStructure([
            'status',
            'message',
            'data' => [
                'title',
                'price',
                'author',
                'updated_at',
                'created_at',
                'id',
            ],
        ]);

        // Assert that the product data matches the expected data
        $response->assertJson([
            'status' => 'success',
            'message' => 'Product is added successfully.',
            'data' => [
                'title' => 'Sample Title',
                'price' => '199.99',
                'author' => 'Sample Author',
            ],
        ]);

    }
}
