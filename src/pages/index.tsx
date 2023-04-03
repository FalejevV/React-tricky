import { PageMain, RandomContainer } from '@/styles/styles.styled'
import CardSwipe from '@/components/CardSwipe/CardSwipe'
import CardSwipeStack from '@/layout/CardSwipeStack/CardSwipeStack'

export default function Home() {
  return (
    <PageMain>
      <RandomContainer>
        <CardSwipeStack />
      </RandomContainer>
    </PageMain>
  )
}
