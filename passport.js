const strategy=require('passport-local')

function initialize(passport){
  
    const authpass=(email,password,done)=>{

    }

    passport.use(new strategy({ usernameField: 'email'}),authpass)
    passport.serialzeUser((user,done)=>{})
    passport.deserialzeUser((id,done)=>{})

}