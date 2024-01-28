<?php
// tests/Feature/LoginTest.php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    public function testUserLogin()
    {
        // Create a sample user for login
        $user = User::create([
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'password' => Hash::make('password123'),
        ]);
    
        // Send a POST request to the login endpoint 
        $response = $this->postJson('/api/login', [
            'email' => 'john.doe@example.com',
            'password' => 'password123',
        ]);
    
        // Assert that the login was successful (HTTP status 200)
        // explixitly returns 200 in the code
        $response->assertStatus(200); 
    
        // Use Sanctum's actingAs method to simulate authentication
        $this->actingAs($user);
    
        // Uncomment dump funtion below to see the authenticated user
        // dump(auth()->user());
    
        // Assert that the response contains a token within the "data" key 
        $this->assertArrayHasKey('token', $response->json()['data']);
    
        // Assert that the user is authenticated
        $this->assertAuthenticatedAs($user);
    
        // Uncomment dump funtion below to see the authenticated user again
        // dump(auth()->user());
    }
    

    
}
