let filename = 'FileName';
let linenumber = 15;
let exception = {
    message: 'This is message',
    stack: 'This is stack'
};

// Обратная косая черта в конце первой строки отменяет действие начального конца строки так что результирующая строка начинается с символа Unicode X (\u2718), а не с новой строки.
let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;

console.log(errorMessage);