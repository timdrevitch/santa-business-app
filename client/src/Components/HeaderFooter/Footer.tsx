import { FC } from "react"
import { FooterContainer } from "../../Styles/HeaderFooterStyles"

const Footer: FC = (): JSX.Element => {
  const current: Date = new Date()
  const thisYear: string = `${current.getFullYear()}`

  return (
    <FooterContainer>
      <div>© All Rights Reserved 2021-{thisYear} Vangarden Cannabis LLC</div>
      <br />
    </FooterContainer>
  )
}

export default Footer
