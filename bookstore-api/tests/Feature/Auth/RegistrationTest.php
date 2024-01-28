<?php
// tests/Feature/RegistrationTest.php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function testUserRegistration()
{
    // Create a sample user data for registration
    $userData = [
        'name' => 'John Doe',
        'email' => 'john.doe@example.com',
        'password' => 'password123',
        // 'password_confirmation' => 'password123',
    ];

    // Create a test user
    $user = User::factory()->create($userData);

    // Generate a token for the test user
    $token = $user->createToken('test_token')->plainTextToken;

    // Send a POST request to the registration endpoint with authentication
    $response = $this->postJson('api/register', $userData, [
        'Authorization' => 'Bearer ' . $token,
    ]);

    // Assert that the user is in the database
    $this->assertDatabaseHas('users', [
        'name' => 'John Doe',
        'email' => 'john.doe@example.com',
    ]);

    // Assert that the user password is hashed in the database
    $this->assertTrue(Hash::check('password123', User::first()->password));
}
}
