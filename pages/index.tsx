import React from "react";


const callAll = async function () {

}

const Index = () => {
  React.useEffect(() => {
    callAll();
  }, [])
  return (
    <div>
      Hello
    </div>
  )
}

export default Index

export async function getServerSideProps() {

  await callAll();

  return {
    props: {}, // will be passed to the page component as props
  }
}
