import PageContent from "../components/PageContent";
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let message = "Something went wrong!";
  const title = "An error occurred!";

  if(error.status===500){
   message = error.data.message;
  }

  if(error.status===404){
    message = "Page not found!";
  }

  return <PageContent title={title}> <p>{message}</p> </PageContent>;
};

export default ErrorPage;
