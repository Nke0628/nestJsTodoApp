import * as React from 'react'
import { rows } from './data/data'
import Thead from './component/thead'
import Tbody from './component/tbody'

const Component : React.FC = () => (
    <div>
        <h1>健康に関する調査</h1>
        <Thead />
        <Tbody rows = {rows} />
    </div>
)

export default Component