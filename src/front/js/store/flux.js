const apiUrl = process.env.BACKEND_URL;

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            user: [],

        },
        actions: {
            signUp: async (user) => {
                let result = await fetch(`${apiUrl}/api/signup/`, {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                result = await result.json();
<<<<<<< HEAD
                localStorage.setItem("user", JSON.stringify(user));
                console.log("result", result)
=======
                localStorage.setItem("user",JSON.stringify(user));
                console.log("result", result);
                console.log(user)
                if(result.msg === "User create succefully"){
                    return "ok"
                }else{
                    return "not ok"
                }
                
>>>>>>> 9abb3de1307ab8757b68dbc039ef166538662b16


            },
            login: async (user) => {
                let result = await fetch(`${apiUrl}/api/login/`, {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                result = await result.json();
                const toKen = result.token
                console.log("result", result);
<<<<<<< HEAD
                localStorage.setItem("token", toKen)

=======
                localStorage.setItem("token", JSON.stringify(toKen));
                
                if (result.success === "User login successfully"){
                    return "ok"
                } else{
                    return "ko"
                }
>>>>>>> 9abb3de1307ab8757b68dbc039ef166538662b16
            },



            GeneratePost: async (post) => {
                let result = await fetch(`${apiUrl}/api/posts/`, {
                    method: "POST",
                    body: JSON.stringify(post),
                    headers: {
<<<<<<< HEAD

                        Authorization: `Bearer ${localStorage.getItem("token")}`,

=======
                        
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
                        
>>>>>>> 9abb3de1307ab8757b68dbc039ef166538662b16
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },

                });
                localStorage.setItem("post", JSON.stringify(post))
                
                result = await result.json();
                console.log("result", result);
            },



            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(apiUrl);
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
                console.log(process.env.BACKEND_URL)
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;