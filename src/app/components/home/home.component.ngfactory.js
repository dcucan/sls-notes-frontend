/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../notes/note.component.ngfactory";
import * as i2 from "../notes/note.component";
import * as i3 from "@angular/forms";
import * as i4 from "../../services/notes-api/notes-api.service";
import * as i5 from "../../services/notes-data/notes-data.service";
import * as i6 from "../navbar/navbar.component.ngfactory";
import * as i7 from "../navbar/navbar.component";
import * as i8 from "../notes/notes.component.ngfactory";
import * as i9 from "../notes/notes.component";
import * as i10 from "@angular/common";
import * as i11 from "./home.component";
var styles_HomeComponent = [];
var RenderType_HomeComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_HomeComponent, data: {} });
export { RenderType_HomeComponent as RenderType_HomeComponent };
function View_HomeComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "note", [["class", "page-modal"]], null, [[null, "closeModalEvent"], ["document", "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("document:keydown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).handleKeyboardEvent($event) !== false);
        ad = (pd_0 && ad);
    } if (("closeModalEvent" === en)) {
        var pd_1 = (_co.onCloseNoteModal() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i1.View_NoteComponent_0, i1.RenderType_NoteComponent)), i0.ɵdid(1, 1163264, null, 0, i2.NoteComponent, [i3.FormBuilder, i4.NotesApiService, i5.NotesDataService], { note: [0, "note"] }, { closeModalEvent: "closeModalEvent" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.newNote; _ck(_v, 1, 0, currVal_0); }, null); }
export function View_HomeComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["class", "container-fluid bg-white"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "app-navbar", [], null, [[null, "showNoteModalEvent"], [null, "signOutUserEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("showNoteModalEvent" === en)) {
        var pd_0 = (_co.onShowNoteModal($event) !== false);
        ad = (pd_0 && ad);
    } if (("signOutUserEvent" === en)) {
        var pd_1 = (_co.onSignOut() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i6.View_NavbarComponent_0, i6.RenderType_NavbarComponent)), i0.ɵdid(2, 114688, null, 0, i7.NavbarComponent, [i5.NotesDataService], null, { showNoteModalEvent: "showNoteModalEvent", signOutUserEvent: "signOutUserEvent" }), (_l()(), i0.ɵeld(3, 0, null, null, 5, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 1, "notes", [], null, [[null, "showNoteModalEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("showNoteModalEvent" === en)) {
        var pd_0 = (_co.onShowNoteModal($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_NotesComponent_0, i8.RenderType_NotesComponent)), i0.ɵdid(5, 114688, null, 0, i9.NotesComponent, [i4.NotesApiService, i5.NotesDataService], null, { showNoteModalEvent: "showNoteModalEvent" }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HomeComponent_1)), i0.ɵdid(7, 16384, null, 0, i10.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(8, 0, null, null, 0, "div", [["class", "footer"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); _ck(_v, 5, 0); var currVal_0 = _co.showNoteModal; _ck(_v, 7, 0, currVal_0); }, null); }
export function View_HomeComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i0.ɵdid(1, 114688, null, 0, i11.HomeComponent, [i5.NotesDataService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = i0.ɵccf("app-home", i11.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
export { HomeComponentNgFactory as HomeComponentNgFactory };
