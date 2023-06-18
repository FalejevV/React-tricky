import DoodleArrow from '@/components/DoodleArrow/DoodleArrow'
import { HomepageContainer, HomepageText } from '@/styles/index.styled'

export default function Home() {
  return (
    <HomepageContainer>
      <HomepageText>
        Why? Just because...
      </HomepageText>
      <DoodleArrow />
    </HomepageContainer>
  )
}
