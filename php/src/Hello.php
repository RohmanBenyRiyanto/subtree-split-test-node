<?php

namespace BenzDev\PhpPackage;

class Hello
{
    public function sayHello(string $name = 'World'): string
    {
        return "Hello, {$name}!";
    }

    public function getVersion(): string
    {
        return '1.0.0';
    }
}
