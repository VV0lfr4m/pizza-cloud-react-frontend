//it's like React.Fragment but handmade. Fragment is better then simple div, it makes the code leaner
function Wrapper(props) {
    return props.children;
}

export default Wrapper;