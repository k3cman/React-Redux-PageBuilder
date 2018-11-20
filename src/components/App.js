import React, { Component } from 'react';

import {H3Head} from './elements/textElements'
import {Wrapper,Container,OneColumn,HalfColumn} from './elements/gridElements';
import {List, ListItem} from './elements/typoElements';

class App extends Component {
    render() {
        return (
            <Wrapper>
<Container>
<OneColumn>
<H3Head>NASLOV</H3Head>
                </OneColumn>
					 <OneColumn>
					 <p>Obican paragraf</p>
					 <blockquote>Blockquote</blockquote>
					 </OneColumn>
					 <div className='sixteen columns'>
					 <HalfColumn>
					 <p><span class="dropcap">D</span> onec varius condimentum augue, nec mollis risus egestas sit amet. Etiam elit est, tincidunt non tincidunt sit amet, mollis vitae orci. Suspendisse sit amet turpis quam. Sed varius magna nec felis faucibus blandit. Quisque at gravida ante. Phasellus sagittis aliquam sodales. Donec a tortor vitae dolor sagittis aliquam eu id lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus ac dapibus nisl. Proin in tellus non velit sagittis viverra vel sit amet dui.</p>

					 </HalfColumn>
	
	


<HalfColumn>

	<p><span class="dropcap full">D</span> onec varius condimentum augue, nec mollis risus egestas sit amet. Etiam elit est, tincidunt non tincidunt sit amet, mollis vitae orci. Suspendisse sit amet turpis quam. Sed varius magna nec felis faucibus blandit. Quisque at gravida ante. Phasellus sagittis aliquam sodales. Donec a tortor vitae dolor sagittis aliquam eu id lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus ac dapibus nisl. Proin in tellus non velit sagittis viverra vel sit amet dui.</p>

</HalfColumn>
	
					 </div>
					 <div className="sixteen-columns">
					 <div class="four columns">
			<List>
				<ListItem>Lorem ipsum dolor sit amet</ListItem>
				<ListItem>Consectetur adipiscing elit</ListItem>
				<ListItem>Integer molestie lorem at massa</ListItem>
				<ListItem>Facilisis in pretium nisl aliquet</ListItem>
			</List>
		</div>
					 </div>
					 <div className="fourteen columns">
				<H3Head>Nemanja</H3Head>
				</div>
</Container>
              
				</Wrapper>
            
				
            


				
        );
    }
}

export default App;