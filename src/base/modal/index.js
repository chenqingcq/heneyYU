import ModalComponent from './modal.vue';
import vue from 'Vue';
var Modal = vue.extend(ModalComponent, 'Modal');
var ModalInstance;

export default function getModal() {
  if (ModalInstance) {
    return;
  }
  ModalInstance = new Modal();
  ModalInstance.$set(ModalInstance, 'title', 'haha');
  document.body.appendChild(ModalInstance.$mount().$el);
}
