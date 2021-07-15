import { useEffect } from 'react'

function Page(props) {
    useEffect(() => {
        document.title = props.tittle || "";
    }, [props.title]);
    return props.children;
}

export default Page
