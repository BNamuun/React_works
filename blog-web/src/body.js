function Body(){
    return(
        <div class="heading">
        <div class="container p-tb">
            <main class="form-signin w-100 m-auto row">
              <div class="col-lg-6 col-md-12 col-sm-12 col-12 py-5">
                  <h1> <strong>Vertically centered hero Sign-up form </strong> </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab at accusantium minima in ad saepe odit cumque dolorum, deleniti quo odio nihil qui reprehenderit ipsa nulla repellendus! Modi magnam, placeat itaque facere consequuntur alias in dignissimos quos doloremque ipsum quia natus quod omnis maiores id est cupiditate ab similique.</p>
              </div>
              <form class="col-lg-6 col-md-12 col-sm-12 col-12 border border-1 p-5">
                <div class="form-floating mb-2">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                  </label>
                </div>
                <hr class="border border-secondary opacity-50"/>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted"> By clicking Sign up, you agree to terms of use </p>
              </form>
            </main>
        </div>
      </div>
    )
}
export default Body;