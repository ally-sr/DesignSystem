import * as Tooltip from '@radix-ui/react-tooltip'
import { Button } from '../Button';
import { ToolTipArrow, TooltipContent } from './styles';

export function CustomTooltip(){
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button>
              Pouse o mouse para acionar
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <TooltipContent sideOffset={5}>
              26 de Outubro - Indisponível
            <ToolTipArrow />
            </TooltipContent>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  };