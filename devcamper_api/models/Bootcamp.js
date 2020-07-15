
const mongoose=require('mongoose')

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 character']
    },
    slug: String,
    decription: {
        type: String,
        require: [true, 'Please add a decription'],
        maxlength: [500, 'Decription can not be more than 500 character']
    },
    website: {
        type: String,
        match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use a vaild URL with HTTP or HTTPS']
    },
    phone: {
        type: Number,
        maxlength: [11, 'Phone number can not be more than 11 character']
    },
    email: {
        type: String,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            , 'Please add a vaid email']
    },
    adress: {
        type: String,
        require: [true, 'Please add an adress']
    },
    location: {
        //GeoJSON Point
        type: {
            type: String,
            enum: ['Point'],
            require: true
        },
        coordinates: {
            type: [Number],
            require: true,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        state: String,
        zipcode: String,
        country: String,
    },
    career:{
        //Array of String
        type:[String],
        require:true,
        enum:[
            'Web development','Mobile development','UX/UI','Data Science', 'Business','Other'
        ]
    },
    averageRating:{
        type:Number,
        min:[1,'Rating must be at least 1'],
        max:[10,'Rating must can not be more than 10']
    },
    averageCost:Number,
    photo:{
        type:String,
        default:'no-photo.jpg'
    },
    hosing:{
        type:Boolean,
        default:false
    },
    jobAssitance:{
        type:Boolean,
        default:false
    },
    jobGuarantee:{
        type:Boolean,
        default:false
    },
    acceptGi:{
        type:Boolean,
        default:false
    },
    createAt:{
        type:Date,
        default:Date.now
    },

})

module.exports=mongoose.model('Bootcamp',BootcampSchema);