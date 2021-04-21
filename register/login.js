$(function() {
    let $registerForm = $("#validation-form");
    if ($registerForm.length) {
        $registerForm.validate({
            rules: {
                username: {
                    required: true,
                    minlength: 3
                },
                password: {
                    required: true,
                    minlength: 9
                },
                repassword: {
                    required: true,
                    minlength: 9,
                    equalTo: '#password'
                },
                fname: {
                    required: true,
                },
                lname: {
                    required: true,
                },
                country: {
                    required: true,
                },
                agreewithterms: {
                    required: true,
                },
            },
            messages: {
                username: {
                    required: 'Username is missing!'
                },
                password: {
                    required: 'Password is missing!'
                },
                repassword: {
                    equalTo: 'Your passwords dont match!'
                },
                fname: {
                    required: 'First name is missing!',
                },
                fname: {
                    required: 'Last name is missing!',
                },
                country: {
                    required: 'Please select your country!',
                },
            }
        })
    }
})

// $(document).ready(function() {
//     $("#validation-form").validate({
//     rules: {
//         username : {
//             required: true,
//             minlength: 3
//         },
//         password : {
//             required: true,
//             minlength: 9
//         },
//         repassword : {
//             required: true,
//             minlength: 9,
//             equalTo : "#password"
//         },
//     }
//     });
//     });