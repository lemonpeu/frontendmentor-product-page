interface NextIconProps {
    fill: string
}

const NextIcon = ({fill}: NextIconProps) => {
    return (
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill={fill} fillRule="evenodd"/></svg>
    )
}

export default NextIcon