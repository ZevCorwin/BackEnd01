const mongoose = require('mongoose');
const validator = require('validator'); // Thêm gói validator để kiểm tra email

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true, // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [50, 'Name must be no longer than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        index: true,
        unique: true,
        lowercase: true, // Chuyển email thành chữ thường
        validate: [
            {
                validator: validator.isEmail,
                message: 'Invalid email'
            },
            {
                validator: function(v) {
                    return v.length <= 50;
                },
                message: 'Email must be at most 50 characters long'
            }
        ]
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        minlength: [8, 'Password must be at least 8 characters long'],
        maxlength: [32, 'Password must be no longer than 32 characters']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [0, 'Age must be a positive number'],
        validate: {
            validator: Number.isInteger,
            message: 'Age must be an integer'
        }
    },
    avatar: {
        type: String, // URL của ảnh đại diện sẽ được lưu dưới dạng chuỗi
        default: '',
        validate: {
            validator: function(v) {
                return v === '' || validator.isURL(v); // URL hợp lệ hoặc chuỗi rỗng
            },
            message: 'Invalid URL'
        }
    },
    role: {
        type: String,
        enum: ['user', 'admin'], 
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
} 
);

const User = mongoose.model('User', userSchema);

module.exports = User;
