<?php
// Test for checking UserData Validation
namespace Tests\Unit;

use App\Http\Controllers\API\LoginRegisterController;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class LoginRegisterControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testUserDataValidationDuringRegistration()
    {
        $controller = new LoginRegisterController();

        // Valid data
        $validData = [
            'name' => 'Juan Dela Cruz',
            'email' => 'juan.cruz@example.com',
            'password' => 'password123',
        ];

        try {
            $response = $controller->register($this->createRequest($validData));
            $this->assertEquals(201, $response->getStatusCode());
        } catch (ValidationException $e) {
            $this->fail('Validation exception was thrown for valid data.');
        }

        //  Invalid data (missing required fields)
        $invalidData = [
            'name' => 'John Doe',
        ];

        try {
            $response = $controller->register($this->createRequest($invalidData));
            $this->fail('Validation exception was expected but not thrown.');
        } catch (ValidationException $e) {
            $errors = $e->validator->errors()->toArray();
            $this->assertArrayHasKey('email', $errors); // Assuming email is a required field
        }
    }

    
public function testPasswordHashingDuringRegistration()
{
    $controller = new LoginRegisterController();

    $userData = [
        'name' => 'Juan Dela Cruz',
        'email' => 'juan.cruz@example.com',
        'password' => 'password123'
    ];

    try {
        $response = $controller->register($this->createRequest($userData));
        $this->assertEquals(201, $response->getStatusCode());

        $user = User::where('email', $userData['email'])->first();
        $this->assertTrue(Hash::check($userData['password'], $user->password));
    } catch (ValidationException $e) {
        $this->fail('Unexpected validation exception for valid data.');
    }
}

    private function createRequest($data = [])
    {
        return new Request($data);
    }
}
