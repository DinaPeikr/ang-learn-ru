import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ModalService} from '../services/modal.service';

export interface IModalData {
  component: Type<any>;
  context: any;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  @ViewChild('modalContent', {read: ViewContainerRef})
  private modalContent!: ViewContainerRef;

  public content!: any;
  public isOpen = false;
  public componentFactory!: ComponentFactory<any>;
  public modalContentRef!: ComponentRef<any>;

  constructor(private readonly modalService: ModalService,
              private readonly cfr: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.modalService.controlsSequence$.subscribe((data: IModalData | null) => {
      //  console.log(data);
      // console.log(data.component);
      if (!data) {
        this.close();
        return;
      }
      const {component, context} = data;
      this.isOpen = true;
      this.componentFactory = this.cfr.resolveComponentFactory(component);
      // console.log(this.componentFactory);
      this.modalContentRef = this.modalContent.createComponent(this.componentFactory);
      // console.log(this.modalRef);

      Object.keys(context).forEach((key: string) => {
        this.modalContentRef.instance[key] = context[key];
      });
      // this.modalRef.instance.cancel = data.context.cancel;
      // this.modalRef.instance.save = data.context.save;
      // this.modalRef.instance.product = data.context.product;
      // this.content = data;
    });
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  close(code: number = 27): void {
    if (code !== 27) {
      return;
    }
    this.isOpen = false;
    if (this.modalContentRef) {
      this.modalContentRef.destroy();
    }
  }
}
